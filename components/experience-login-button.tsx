"use client";

import { useState } from "react";

export default function ExperienceLoginForm() {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!id || !pw) {
      setStatus("아이디와 비밀번호를 모두 입력해주세요.");
      return;
    }

    setStatus("로그인 시도 중...");

    try {
      const response = await fetch("/api/start-crawling", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, pw }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        setStatus(`실패: ${errorData.error || "알 수 없는 에러"}`);
        return;
      }

      const result = await response.json();
      console.log(result);
      setStatus("크롤링 성공! 🎉");
    } catch (error) {
      console.error(error);
      setStatus("서버 오류가 발생했습니다. 😭");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-sm mx-auto mt-10">
      <div>
        <input
          type="text"
          placeholder="아이디 입력"
          value={id}
          onChange={(e) => setId(e.target.value)}
          className="w-full border p-2 rounded"
        />
      </div>
      <div>
        <input
          type="password"
          placeholder="비밀번호 입력"
          value={pw}
          onChange={(e) => setPw(e.target.value)}
          className="w-full border p-2 rounded"
        />
      </div>
      <button
        type="submit"
        className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        로그인하고 크롤링 시작
      </button>
      <div className="text-center mt-4">
        {status && <p>{status}</p>}
      </div>
    </form>
  );
}
