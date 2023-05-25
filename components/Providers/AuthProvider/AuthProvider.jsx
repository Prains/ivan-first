"use client";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCurrentUser } from "@/services/actions";

const AuthProvider = () => {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.user.status);

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  if (status === "loading") {
    return (
      <main className="absolute top-0 left-0 h-full w-full flex-center">
        <p>loading...</p>
      </main>
    );
  }

  return <>{children}</>;
};

export default AuthProvider;
