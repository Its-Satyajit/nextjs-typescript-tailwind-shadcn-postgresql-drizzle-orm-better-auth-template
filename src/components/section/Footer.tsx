export default function Footer() {
  return (
    <div>
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center gap-4 py-4">
          <div className="text-center text-sm text-gray-500">
            © {new Date().getFullYear()} Its-Satyajit
          </div>
          <div className="text-center text-sm text-gray-500">
            Made with ❤️ by Its-Satyajit
          </div>
        </div>
      </div>
    </div>
  );
}
