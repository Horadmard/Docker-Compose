"use client"
import Spinner from "@/components/spinner";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter()
  useEffect(()=>{
    router.push('/login')
  },[])
  return (
    <div className={("fixed inset-0 z-50 backdrop-blur-md")}>
      <div className="absolute right-1/2 top-1/2 -translate-y-1/2 translate-x-1/2">
        <Spinner variant="secondary" />
      </div>
    </div>
  );
}
