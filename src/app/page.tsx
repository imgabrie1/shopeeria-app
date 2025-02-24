"use client"

import { useRouter } from "next/navigation"

export default function Home() {
  const router = useRouter()
  return (
    <div>
      <button type="button" onClick={() => router.push("/login")}>
        login
      </button>
    </div>
  );
}
