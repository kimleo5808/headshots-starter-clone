export default function LoginFailedPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-4xl font-bold">Login Failed</h1>
      <p className="mt-4 text-center text-gray-500">
        Authentication was not successful. Please try again.
      </p>
    </div>
  );
}
