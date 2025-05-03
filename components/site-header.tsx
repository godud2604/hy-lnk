"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu";
import useAuth from "@/hooks/useAuth";
import { signOut } from "firebase/auth";
import { auth, db } from "@/lib/firebase";
import { useRouter } from "next/navigation";
import { doc, getDoc } from "firebase/firestore";
import { LoginButton } from "./loginButton";
import { Badge } from "@/components/ui/badge";

export default function SiteHeader() {
  const { user } = useAuth();
  const router = useRouter();

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      // 로그아웃 후 추가 처리(예: 페이지 리다이렉션 등)를 여기에 구현할 수 있습니다.
    } catch (error) {
      console.error("로그아웃 실패:", error);
    }
  };

  const handleProfileClick = async (e: React.MouseEvent) => {
    e.preventDefault();
    if (!user) return;

    try {
      const userRef = doc(db, "users", user.uid);
      const userSnap = await getDoc(userRef);

      if (userSnap.exists() && userSnap.data().hasPaid) {
        router.push('/dashboard');
      } else {
        alert('결제 완료 후 이용하실 수 있어요!');
        router.push('/payment');
      }
    } catch (error) {
      console.error("프로필 확인 중 오류 발생:", error);
      alert('오류가 발생했습니다. 잠시 후 다시 시도해주세요.');
    }
  };


  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6 md:gap-10">
          <Link href="/" className="font-bold text-xl text-primary">
            에듀테크단
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link
              href="/curriculum"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              6일 완성 커리큘럼
            </Link>
            <div className="flex items-center gap-4 relative">
              <Link
                href="/"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                블로그 자동화
              </Link>
              <Badge variant="secondary" className="absolute -top-2.5 -right-8 text-[10px] py-0 px-1.5 h-4 bg-yellow-100/70 text-yellow-800 hover:bg-yellow-100/70">
                출시예정
              </Badge>
            </div>
            {/* <Link
              href="/tips"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              체험단 꿀팁
            </Link> */}
          </nav>
        </div>
        <div className="flex items-center gap-4">
          {/* 데스크탑용: 로그인한 경우 사용자 정보와 마이프로필 링크 표시 */}
          <div className="hidden md:flex gap-2 items-center">
            {user ? (
              <>
                <Button onClick={handleProfileClick}>
                  마이프로필
                </Button>
                <Button variant="outline" className="border-lavender-200 hover:bg-lavender-50 text-primary" onClick={handleSignOut}>
                  로그아웃
                </Button>
              </>
            ) : (
              <LoginButton />
            )}
          </div>
          {/* 모바일용 Dropdown 메뉴 */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild className="md:hidden">
              <Button variant="outline" size="icon" className="border-lavender-200">
                <Menu className="h-5 w-5" />
                <span className="sr-only">메뉴 열기</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem asChild>
                <Link href="/curriculum">6일 완성 커리큘럼</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <div className="flex items-center gap-2 w-full relative">
                  <Link href="/">블로그 자동화</Link>
                  <Badge variant="secondary" className="text-[10px] py-0 px-1.5 h-4 bg-yellow-100/70 text-yellow-800 hover:bg-yellow-100/70">
                    출시예정
                  </Badge>
                </div>
              </DropdownMenuItem>
              {/* <DropdownMenuItem asChild>
                <Link href="/">체험단 꿀팁</Link>
              </DropdownMenuItem> */}
              {user ? (
                <>
                  <DropdownMenuItem asChild className="p-2">
                    <Link href="/dashboard">마이프로필</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem onSelect={handleSignOut} className="p-2">
                    로그아웃
                  </DropdownMenuItem>
                </>
              ) : (
                <DropdownMenuItem className="p-0 hover:bg-transparent focus:bg-transparent">
                  <div className="w-full px-2 py-1">
                    <LoginButton className="w-full justify-center text-sm h-9" size="sm" />
                  </div>
                </DropdownMenuItem>
              )}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}
