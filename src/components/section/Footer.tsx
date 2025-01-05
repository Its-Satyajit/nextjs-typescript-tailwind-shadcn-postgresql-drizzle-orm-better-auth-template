import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-100 py-8">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-center text-sm text-gray-500">
          © {new Date().getFullYear()}{" "}
          <Link
            href="https://github.com/Its-Satyajit"
            target="_blank"
            rel="noreferrer"
          >
            Its-Satyajit
          </Link>
        </div>
        <div className="text-center text-sm text-gray-500">
          Made with ❤️ by
          <Link
            href="https://github.com/Its-Satyajit"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            Its-Satyajit
          </Link>{" "}
          and the community.
        </div>

        <div className="flex gap-6">
          <Link
            href="https://github.com/Its-Satyajit/nextjs-template/blob/main/docs/README.md"
            className="text-sm text-zinc-400 transition-colors hover:text-black"
          >
            Documentation
          </Link>
          <Link
            href="https://github.com/Its-Satyajit/nextjs-template"
            className="text-sm text-zinc-400 transition-colors hover:text-black"
          >
            GitHub
          </Link>
        </div>
      </div>
    </footer>
  );
}
