import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex justify-center md:h-[calc(100vh-64px)] items-center">
      <div className="mt-auto mb-auto">
        <SignIn />
      </div>
    </div>
  );
}
