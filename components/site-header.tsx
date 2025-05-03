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
import { Separator } from "@/components/ui/separator";

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
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md supports-[backdrop-filter]:bg-white/80">
      <div className="container flex h-14 sm:h-16 items-center justify-between">
        <div className="flex items-center gap-4 sm:gap-6 md:gap-10">
          <Link href="/" className="font-bold text-lg sm:text-xl bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
            에듀테크단
          </Link>
          <nav className="hidden md:flex gap-8">
            <Link
              href="/curriculum"
              className="text-sm font-medium text-gray-600 transition-colors hover:text-primary relative group"
            >
              6일 완성 커리큘럼
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
            </Link>
            <Link
              href="/tips"
              className="text-sm font-medium text-gray-600 transition-colors hover:text-primary relative group"
            >
              체험단 꿀팁
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
            </Link>
            <div className="flex items-center gap-2 relative group">
              <div
                className="text-sm font-medium text-gray-400 transition-colors relative cursor-not-allowed"
              >
                블로그 자동화
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
              </div>
              <span className="absolute -top-3 -right-10 text-[10px] py-0.5 px-1.5 rounded-full bg-gradient-to-r from-yellow-100/80 to-orange-100/80 text-yellow-800 font-medium backdrop-blur-sm border border-yellow-200/50">
                출시예정
              </span>
            </div>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          {/* 데스크탑용 */}
          <div className="hidden md:flex gap-3 items-center">
            {user ? (
              <>
                <Button 
                  onClick={handleProfileClick}
                  className="h-9 px-4 rounded-full bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary/80 text-white shadow-sm"
                >
                  대시보드
                </Button>
                <Button 
                  variant="outline" 
                  className="h-9 px-4 rounded-full border-2 border-lavender-200 text-primary hover:bg-lavender-50/50" 
                  onClick={handleSignOut}
                >
                  로그아웃
                </Button>
              </>
            ) : (
              <LoginButton className="h-9 px-4 rounded-full bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary/80 text-white shadow-sm" />
            )}
          </div>
          {/* 모바일용 Dropdown 메뉴 */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" className="h-8 w-8 text-gray-600 hover:text-primary">
                <Menu className="h-5 w-5" />
                <span className="sr-only">메뉴 열기</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-[200px] p-2 bg-white/80 backdrop-blur-md border border-gray-100">
              <DropdownMenuItem asChild className="h-9 text-sm rounded-lg text-gray-600 focus:text-primary focus:bg-lavender-50">
                <Link href="/curriculum">6일 완성 커리큘럼</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild className="h-9 text-sm rounded-lg text-gray-600 focus:text-primary focus:bg-lavender-50">
                <Link href="/tips">체험단 꿀팁</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild className="h-9 text-sm rounded-lg text-gray-600 focus:text-primary focus:bg-lavender-50">
                <div className="flex items-center gap-2 w-full relative">
                  <div className="text-sm font-medium text-gray-400 transition-colors relative cursor-not-allowed">
                    블로그 자동화
                  </div>
                  <span className="text-[10px] py-0.5 px-1.5 rounded-full bg-gradient-to-r from-yellow-100/80 to-orange-100/80 text-yellow-800 font-medium">
                    출시예정
                  </span>
                </div>
              </DropdownMenuItem>
              <DropdownMenuItem className="px-1 focus:bg-transparent">
                <Separator className="my-1" />
              </DropdownMenuItem>
              {user ? (
                <>
                  <DropdownMenuItem asChild className="h-9 text-sm rounded-lg text-gray-600 focus:text-primary focus:bg-lavender-50">
                    <Link href="/dashboard">대시보드</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem onSelect={handleSignOut} className="h-9 text-sm rounded-lg text-gray-600 focus:text-primary focus:bg-lavender-50">
                    로그아웃
                  </DropdownMenuItem>
                </>
              ) : (
                <DropdownMenuItem className="p-0 hover:bg-transparent focus:bg-transparent">
                  <LoginButton className="w-full h-9 rounded-lg text-sm justify-center bg-gradient-to-r from-primary to-primary/90" />
                </DropdownMenuItem>
              )}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  )
}
