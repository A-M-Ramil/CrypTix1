import { redirect } from "next/navigation";

async function searchConcert(formData: FormData) {
    "use server";
  
    const searchQuery = formData.get("searchQuery")?.toString();
  
    if (searchQuery) {
      redirect("/search?query=" + searchQuery);
    }
  }


export default async function search() {
    return (
        <>
        <div className="flex-none gap-2">
          <form action={searchConcert}>
            <div className="form-control">
              <input
                name="searchQuery"
                placeholder="Search"
                className="input-bordered input input-warning w-full min-w-[100px]"
              />
            </div>
          </form>
        </div>
      </>
    )}