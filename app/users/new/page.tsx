import { useRouter } from "next/navigation";
import React from "react";
("use client");

const NewUserPage = () => {
  const router = useRouter();

  return (
    <div>
      <button className="btn btn-primary" onClick={() => router.push('/users')}>
        Create
      </button>
    </div>
  );
};

export default NewUserPage;
