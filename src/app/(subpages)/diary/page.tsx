"use client";
import React from "react";
import Link from "next/link";
import { CarouselCard } from "@/components/CarouselCard";

const Page = () => {
  const [days, setDays] = React.useState<any[]>([]);
  const [searchTerm, setSearchTerm] = React.useState("");
  const [currentPage, setCurrentPage] = React.useState(1);
  const [itemsPerPage] = React.useState(9); // change this to show more/less per page

  React.useEffect(() => {
    const fetchDays = async () => {
      try {
        const response = await fetch("/api/days");
        const data = await response.json();
        setDays(data.data || []);
      } catch (err) {
        console.error("Failed to fetch days", err);
        setDays([]);
      }
    };

    fetchDays();
  }, []);

  // Reset to first page when search changes
  React.useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm]);

  const filteredDays = days.filter((day: any) =>
    (day.title || "").toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const totalPages = Math.max(1, Math.ceil(filteredDays.length / itemsPerPage));
  // Ensure currentPage is within bounds
  React.useEffect(() => {
    if (currentPage > totalPages) setCurrentPage(totalPages);
  }, [currentPage, totalPages]);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedDays = filteredDays.slice(
    startIndex,
    startIndex + itemsPerPage,
  );

  const goToPage = (n: number) => {
    const page = Math.min(Math.max(1, n), totalPages);
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <main className="bg-gradient-to-b from-secondary to-primary w-full min-h-screen">
      <div className="block justify-between p-10 md:flex py-10">
        <h1 className="text-4xl font-bold ">Diary — Days</h1>
        <input
          type="text"
          placeholder="Search days..."
          className="px-8 py-5 border border-neutral-900 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="max-w-full mx-auto p-4 grid grid-cols-1 md:grid-cols-3 gap-4">
        {days.length === 0 && searchTerm === "" ? (
          <p>Loading days...</p>
        ) : filteredDays.length === 0 ? (
          <p>No days found.</p>
        ) : (
          paginatedDays.map((day: any, index: number) => (
            <Link
              href={`${day.route}`}
              key={day.route ?? index}
              className="rounded-lg h-fit"
            >
              <CarouselCard cardInfos={{ ...day, route: null }} />
            </Link>
          ))
        )}
      </div>

      {/* Pagination controls */}
      {filteredDays.length > 0 && (
        <div className="flex items-center justify-center gap-2 py-8 bg-black/50">
          <button
            onClick={() => goToPage(currentPage - 1)}
            disabled={currentPage === 1}
            aria-label="Previous page"
            className={`px-3 py-2 rounded-md bg-secondary ${
              currentPage === 1
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-primary"
            }`}
          >
            Prev
          </button>

          {/* Simple page buttons (will render all pages; for many pages consider truncating) */}
          <div className="flex gap-1 items-center">
            {Array.from({ length: totalPages }).map((_, i) => {
              const pageNum = i + 1;
              return (
                <button
                  key={pageNum}
                  onClick={() => goToPage(pageNum)}
                  aria-current={currentPage === pageNum ? "page" : undefined}
                  className={`px-3 py-2 rounded-md transition-colors ${
                    currentPage === pageNum
                      ? "bg-primary text-white"
                      : "bg-secondary hover:bg-primary"
                  }`}
                >
                  {pageNum}
                </button>
              );
            })}
          </div>

          <button
            onClick={() => goToPage(currentPage + 1)}
            disabled={currentPage === totalPages}
            aria-label="Next page"
            className={`px-3 py-2 rounded-md  bg-secondary ${
              currentPage === totalPages
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-primary"
            }`}
          >
            Next
          </button>
        </div>
      )}
    </main>
  );
};

export default Page;
