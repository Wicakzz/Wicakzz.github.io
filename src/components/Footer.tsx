import { profile } from "@/data/profile";

export default function Footer() {
  return (
    <footer className="border-t border-rule">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-5 py-6 font-mono text-xs text-faint sm:px-8">
        <p>
          © {new Date().getFullYear()} {profile.name}
        </p>
        <a href="#top" className="link-underline hover:text-ink">
          kembali ke atas ↑
        </a>
      </div>
    </footer>
  );
}
