import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Pagination({ page, lastpage, nextpage, prevpage }) {
  const router = useRouter();
  let nextPath = router.asPath.includes("page")
    ? `${router.asPath.slice(0, -1)}${page + 1}`
    : `${router.asPath}&page=${page + 1}`;

  let prevPath = router.asPath.includes("page")
    ? `${router.asPath.slice(0, -1)}${page - 1}`
    : `${router.asPath}&page=${page + 1}`;

  return (
    <>
      {page > 1 && (
        <Link href={`${prevPath}`}>
          <a className="btn-pagination">Prev page</a>
        </Link>
      )}
      {page < lastpage && (
        <Link href={`${nextPath}`}>
          <a className="btn-pagination">Next page</a>
        </Link>
      )}
    </>
  );
}
