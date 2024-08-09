import { auth } from "@clerk/nextjs/server";
import DropzoneComponent from "@/components/DropzoneComponent";

function Dashboard() {
  const { userId } = auth();

  return (
    <div>
      <DropzoneComponent />
    </div>
  );
}

export default Dashboard;
