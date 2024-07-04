import Loader from "@/components/Loader";

export default function Loading() {
  return (
    <div className="grid h-full min-h-[80vh] w-full place-items-center">
      <Loader />
    </div>
  );
}
