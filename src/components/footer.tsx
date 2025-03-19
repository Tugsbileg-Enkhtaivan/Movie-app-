export const Footer = () => {
  return (
    <div className="bg-indigo-700 p-20">
      <div>
        <div className="flex ">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.83268 1.66663V18.3333M14.166 1.66663V18.3333M1.66602 9.99996H18.3327M1.66602 5.83329H5.83268M1.66602 14.1666H5.83268M14.166 14.1666H18.3327M14.166 5.83329H18.3327M3.48268 1.66663H16.516C17.5193 1.66663 18.3327 2.47998 18.3327 3.48329V16.5166C18.3327 17.5199 17.5193 18.3333 16.516 18.3333H3.48268C2.47936 18.3333 1.66602 17.5199 1.66602 16.5166V3.48329C1.66602 2.47998 2.47936 1.66663 3.48268 1.66663Z"
              stroke="#FAFAFA"
            />
          </svg>

          <p className="text-[16px], text-[#FAFAFA] italic ml-2 font-bold leading-[20px] tracking-[0.32px]">
            Movie Z
          </p>
        </div>
        <p className="text-[#FAFAFA] text-[14px] font-normal leading-5 non-italic pt-4">
          © 2024 Movie Z. All Rights Reserved
        </p>
      </div>
      <div className="flex justify-between pt-(--spacing-7)">
        <div>
          <p className="text-[#FAFAFA] text-[14px] font-normal leading-5 non-italic pb-4">
            Contact Information
          </p>
          <div className="flex gap-3 items-center pb-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#fff"
            >
              <rect width="20" height="16" x="2" y="4" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
            <div className="flex flex-col p">
              <p className="text-[#FAFAFA] text-[14px] font-normal leading-5 non-italic ">
                Email:
              </p>
              <p className="text-[#FAFAFA] text-[14px] font-normal leading-5 non-italic ">
                ariMovieZ@gmail.com
              </p>
            </div>
          </div>
          <div className="flex gap-3 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#fff"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            <div className="flex flex-col">
              <p className="text-[#FAFAFA] text-[14px] font-normal leading-5 non-italic ">
                Phone:
              </p>
              <p className="text-[#FAFAFA] text-[14px] font-normal leading-5 non-italic ">
                +976 8698-1230
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <a
            href="#"
            className="text-[#FAFAFA] text-[14px] font-normal leading-5 non-italic "
          >
            Follow us
          </a>
          <a
            href="#"
            className="text-[#FAFAFA] text-[14px] font-normal leading-5 non-italic "
          >
            Facebook
          </a>
          <a
            href="#"
            className="text-[#FAFAFA] text-[14px] font-normal leading-5 non-italic "
          >
            Instagram
          </a>
          <a
            href="#"
            className="text-[#FAFAFA] text-[14px] font-normal leading-5 non-italic "
          >
            Twitter
          </a>
          <a
            href="#"
            className="text-[#FAFAFA] text-[14px] font-normal leading-5 non-italic "
          >
            Youtube
          </a>
        </div>
      </div>
    </div>
  );
};
