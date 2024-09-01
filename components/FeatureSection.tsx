import {
  FilePlusIcon,
  UploadIcon,
  LockClosedIcon,
} from "@radix-ui/react-icons";
import FeatureCard from "@/components/FeatureCard";

const FeatureSection = () => {
  return (
    <section id="features" className="py-16 bg-white dark:bg-black mb-10">
      <div className="max-w-6xl mx-auto px-4 md:px-8 lg:px-16">
        <h2 className="text-3xl font-bold text-center text-green-600 dark:text-green-500 mb-12">
          Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <FeatureCard
            icon={
              <FilePlusIcon className="w-8 h-8 text-green-600 dark:text-green-500" />
            }
            title="Easy File Management"
            description="Organize your files effortlessly with our intuitive interface."
          />
          <FeatureCard
            icon={
              <UploadIcon className="w-8 h-8 text-green-600 dark:text-green-500" />
            }
            title="Fast Uploads"
            description="Upload your files at lightning speed with our optimized system."
          />
          <FeatureCard
            icon={
              <LockClosedIcon className="w-8 h-8 text-green-600 dark:text-green-500" />
            }
            title="Secure Cloud Storage"
            description="Your files are encrypted and securely stored in the cloud."
          />
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
