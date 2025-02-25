import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Home - Tennis Club",
};

export default function Home() {
  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold text-blue-600">Welcome to the Tennis Club</h1>
      <p className="text-gray-700 mt-4">Join our club and enjoy the best tennis experience.</p>
      <div className="mt-8">
        <Image
          src="https://images.pexels.com/photos/1277397/pexels-photo-1277397.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
          alt="Tennis Court"
          width={600}  
          height={400}
          className="rounded-lg shadow-lg mx-auto"
        />
      </div>
    </div>
  );
}
