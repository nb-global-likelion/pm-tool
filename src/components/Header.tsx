import { NavLink } from "react-router-dom";
import profile from "../assets/image-profile-default.png";
import ArrowBottom from "../assets/icon-arrow-bottom.svg";
import IconProjectBlack from "../assets/icon-project-black.svg";
import IconProjectWhite from "../assets/icon-project-white.svg";
import IconTaskBlack from "../assets/icon-task-black.svg";
import IconTaskWhite from "../assets/icon-task-white.svg";
import IconNotification from "../assets/icon-notification.svg";
import IconChat from "../assets/icon-chat.svg";
import IconSetting from "../assets/icon-setting.svg";
import ProfileDropdown from "./ProfileDropdown";
import { useEffect, useRef, useState } from "react";

const tabBase =
  "flex items-center justify-center gap-1 px-4 py-2 rounded-lg text-body2 transition select-none";

const tabActive = "bg-white text-gray-900";

const tabInactive = "bg-transparent text-white hover:text-white";

type Status = "online" | "offline" | "away";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState<Status>("online");
  const rootRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const onDown = (e: MouseEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", onDown);
    return () => document.removeEventListener("mousedown", onDown);
  }, []);

  return (
    <header className="h-12 bg-gray-900 px-12 flex items-center justify-between">
      {/* 프로필 영역 */}
      {/* Todo: 프로필 API 연결 */}
      <div ref={rootRef} className="flex items-center gap-4 relative">
        <img src={profile} className="w-6 h-6" />
        <span className="text-white">멋쟁이사자처럼</span>
        <button type="button" onClick={() => setOpen((v) => !v)}>
          <img src={ArrowBottom} />
        </button>
        {open && (
          <ProfileDropdown
            status={status}
            onChangeStatus={(s) => setStatus(s)}
            onClose={() => setOpen(false)}
          />
        )}
      </div>

      {/* 중간탭 */}
      <div className="flex items-center justify-center gap-2">
        <NavLink
          to="/project"
          className={({ isActive }) =>
            [tabBase, isActive ? tabActive : tabInactive].join(" ")
          }
        >
          {({ isActive }) => (
            <>
              <img
                src={isActive ? IconProjectBlack : IconProjectWhite}
                className="w-4 h-4"
              />
              <span>프로젝트</span>
            </>
          )}
        </NavLink>

        <NavLink
          to="/task"
          className={({ isActive }) =>
            [tabBase, isActive ? tabActive : tabInactive].join(" ")
          }
        >
          {({ isActive }) => (
            <>
              <img
                src={isActive ? IconTaskBlack : IconTaskWhite}
                className="w-4 h-4"
              />
              <span>업무</span>
            </>
          )}
        </NavLink>
      </div>

      {/* 액션 */}
      <div className="flex items-center gap-6 justify-end">
        <button>
          <img src={IconNotification} alt="알림" className="p-w-6 h-6" />
        </button>
        <button>
          <img src={IconChat} alt="채팅" className="w-6 h-6" />
        </button>
        <button>
          <img src={IconSetting} alt="더보기" className="p-w-6 h-6" />
        </button>
      </div>
    </header>
  );
};
export default Header;
