import { auth } from "@clerk/nextjs/server";
import { collection, getDocs } from "firebase/firestore";
import DropzoneComponent from "@/components/DropzoneComponent";
import { db } from "@/firebase";
import { FileType } from "@/typings";
import TableWrapper from "@/components/table/TableWrapper";

async function Dashboard() {
  const { userId } = auth();

  const docsResults = await getDocs(collection(db, "users", userId!, "files"));

  const skeletonFiles: FileType[] = [];

  for (let i = 0; i < 5 && docsResults.docs[i]; i++) {
    const doc = docsResults.docs[i];
    skeletonFiles.push({
      id: doc.id,
      filename: doc.data().filename || doc.id,
      timeStamp: new Date(doc.data().timeStamp?.seconds * 1000) || undefined,
      fullName: doc.data().fullName,
      downloadURL: doc.data().downloadURL,
      type: doc.data().type,
      size: doc.data().size,
    });
  }

  return (
    <div>
      <DropzoneComponent />
      <hr />
      <section className="container space-y-5 mt-10">
        <h2 className="font-bold text-xl">All Files</h2>

        <TableWrapper skeletonFiles={skeletonFiles} />
      </section>
    </div>
  );
}

export default Dashboard;
