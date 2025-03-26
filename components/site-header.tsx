import Link from "next/link"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu"
import LoginButton from "./loginButton"

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6 md:gap-10">
          <Link href="/" className="font-bold text-xl text-primary">
            체험단 마스터
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link
              href="/tips"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              체험단 꿀팁
            </Link>
            <Link
              href="/schedule"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              일정 관리
            </Link>
            <Link
              href="/tools"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              자동화 툴
            </Link>
            <Link
              href="/monetization"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              수익 창출
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <div className="hidden md:flex gap-2">
            <Button variant="outline" className="border-lavender-200 hover:bg-lavender-50 text-primary" asChild>
              <Link href="/login">로그인</Link>
            </Button>
            <LoginButton/>
            <Button asChild>
              <Link href="/register">회원가입</Link>
            </Button>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild className="md:hidden">
              <Button variant="outline" size="icon" className="border-lavender-200">
                <Menu className="h-5 w-5" />
                <span className="sr-only">메뉴 열기</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem asChild>
                <Link href="/tips">체험단 꿀팁</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/schedule">일정 관리</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/tools">자동화 툴</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/monetization">수익 창출</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/login">로그인</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/register">회원가입</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  )
}

