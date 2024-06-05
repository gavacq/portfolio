import Image from "next/image";
import { ArrowIcon } from "./arrow-icon";

export function Projects() {
  return (
    <div>
      <h1 className="font-semibold text-2xl mb-4 tracking-tighter">Projects</h1>
      <ul className="space-y-4">
        <li>
          <a
            className="flex items-center font-bold text-neutral-900 dark:text-neutral-100"
            href="https://integritycheck.app"
          >
            <p className="mr-2 h-7">Integrity Check</p>
            <ArrowIcon />
          </a>
          <p className="text-neutral-600 dark:text-neutral-400">
            A web app for tracking your personal growth.
          </p>
          <Image
            src="/integrity-check.png"
            width={200}
            height={200}
            alt="Integrity Check Home Page"
          />
        </li>
        <li>
          <a
            className="flex items-center font-bold text-neutral-900 dark:text-neutral-100"
            href="https://union-immigration.vercel.app"
          >
          <p className="mr-2 h-7">Union Immigration Software</p>
          <ArrowIcon />
          </a>
          <p className="text-neutral-600 dark:text-neutral-400">
            Union leverages AI to streamline the process of proving
            relationships for immigration sponsorship by processing chat data
            efficiently, removing the need for manual message digging.
          </p>
          <iframe
            width="w-3/4"
            height="315"
            src="https://www.youtube.com/embed/W9I8CpVKAM8?si=M7r6PgGmXZu9W4ZT"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </li>
      </ul>
    </div>
  );
}
