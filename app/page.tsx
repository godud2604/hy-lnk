'use client';

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ExternalLink, PlayCircle, Music, Instagram, Youtube } from "lucide-react"
import { useState } from "react"

interface StreamingService {
  name: string;
  icon?: React.ReactElement;
  logo?: string;
  action: string;
  type: string;
  url: string;
}

// 모달 컴포넌트 추가
const CoupangModal = ({ isOpen, onClose,onConfirm, type, name }: { 
  isOpen: boolean; 
  onClose: () => void;
  onConfirm: () => void;
  type: string;
  name: string;
}) => {
  if (!isOpen) return null;

  const coupangUrl = "https://link.coupang.com/a/ccHvmq"

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg p-6 max-w-4xl w-full h-[60vh]">
        <div className="flex justify-between items-center mb-4">
          <Button 
            onClick={onConfirm}
            className="flex-1 mr-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:opacity-90 text-white font-bold transition-all duration-200 shadow-lg overflow-hidden text-ellipsis whitespace-nowrap"
          >
            {type === "pdf" ? "PDF 다운로드" : `${name} 이동`}
          </Button>
          <Button 
            onClick={onClose} 
            className="bg-gray-400 hover:opacity-90 text-white font-bold transition-all duration-200 shadow-lg"
          >
            닫기
          </Button>
        </div>

        <div className="h-[calc(100%-90px)] overflow-auto">
          <iframe
            src={coupangUrl}
            className="w-full h-full rounded-lg"
            title="Coupang Goldbox"
          />
        </div>
        <p className="text-xs mt-4 text-gray-500 text-left">
          이 포스팅은 쿠팡 파트너스 활동의 일환으로, 이에 따른 일정액의 수수료를 제공받습니다.
        </p>
      </div>
    </div>
  );
};

const ServiceItem = ({ service }: { service: StreamingService }) => {
  const [showModal, setShowModal] = useState(false);

  const handleServiceClick = () => {
    if (service.type === "pdf") {
      executeAction(service.url);
    } else {
      setShowModal(true);
    }
  };

  const executeAction = (url: string) => {
    const link = document.createElement('a');
    link.href = url;
    link.download = url.split('/').pop() || '6일만예_블로그_체험단_당첨.pdf'; // 파일 이름 지정
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    return; 
  };
  
  return (
    <>
      <div 
        key={service.name} 
        className="flex items-center justify-between p-4 hover:bg-white/5 transition-colors duration-200 cursor-pointer"
        onClick={() => handleServiceClick()}
      >
        <div className="flex items-center gap-3">
          {service.icon ? (
            service.icon
          ) : (
            <Image
              src={service.logo || "/placeholder.svg"}
              alt={service.name}
              width={24}
              height={24}
              className="w-6 h-6"
            />
          )}
          <span className="font-medium">{service.name}</span>
        </div>
        <Button variant={service.type === "pdf" ? "default" : "secondary"} size="sm" className="min-w-[80px]">
          {service.action === "Go To" ? (
            <span className="flex items-center gap-1">
              {service.action} <ExternalLink className="w-4 h-4" />
            </span>
          ) : service.action === "Play" ? (
            <span className="flex items-center gap-1">
              {service.action} <PlayCircle className="w-4 h-4" />
            </span>
          ) : (
            service.action
          )}
        </Button>
      </div>
      
      <CoupangModal 
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        onConfirm={() => {
          setShowModal(false);
          executeAction(service.url);
        }}
        type={service.type}
        name={service.name}
      />
    </>
  );
};

export default function Page() {
  const streamingServices: StreamingService[] = [
    // { 
    //   name: "[전자책] 6일만에 블로그 체험단 당첨", 
    //   icon: <BookText className="w-6 h-6" />, 
    //   action: "Download", 
    //   type: "pdf",
    //   url: "/ebook.pdf",
    // },
    { 
      name: "Naver", 
      icon: <Music className="w-6 h-6" />, 
      action: "Go To", 
      type: "sns",
      url: "https://m.blog.naver.com/ees238?tab=2"
    },
    { 
      name: "Instagram", 
      icon: <Instagram className="w-6 h-6" />, 
      action: "Go To", 
      type: "sns",
      url: "https://www.instagram.com/nomad._hy"
    },
    { 
      name: "TikTok", 
      icon: <Music className="w-6 h-6" />, 
      action: "Go To", 
      type: "sns",
      url: "https://www.tiktok.com/@user7424792417244"
    },
    { 
      name: "Youtube", 
      icon: <Youtube className="w-6 h-6" />, 
      action: "Go To", 
      type: "sns",
      url: "https://www.youtube.com/channel/UCD2sfmi3lx6lQUiV6zMuNbA"
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <main className="container mx-auto px-4 py-8 max-w-md">
        {/* Album Header */}
        <div className="text-center mb-8">
          <div className="relative w-64 h-64 mx-auto mb-4">
            <Image
              src="/profileImage.png"
              alt="Album Cover"
              fill
              quality={100}  
              priority 
              className="rounded-lg object-cover"
            />
          </div>
          <h1 className="text-2xl font-bold mb-1">Hae Sick 해식</h1>
          <h2 className="text-xl mb-2">퇴사(디지털 노마드)를 꿈꾸는, 개발자의 삶</h2>
          <p className="text-gray-400">N잡러 블로그&자기계발&부업</p>
        </div>

        {/* Streaming Services List */}
        <Card className="bg-white/10 backdrop-blur-sm border-none">
          <div className="divide-y divide-gray-700">
            {streamingServices.map((service) => (
              <ServiceItem key={service.name} service={service} />
            ))}
          </div>
        </Card>

        {/* Cookie Consent */}
        <div className="text-center text-sm text-gray-400 mt-8">
          <p className="mt-2">© 2025 해식. All rights reserved.</p>
        </div>
      </main>
    </div>
  )
}

