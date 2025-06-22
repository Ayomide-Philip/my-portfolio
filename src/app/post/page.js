export default function postMessage() {
  return (
    <section className="bg-gray-900  flex items-center justify-center p-4 pb-26">
      <div className="bg-white  border linkedin-border rounded-lg shadow-sm max-w-xl w-full overflow-hidden">
        <div className="p-4">
          <div className="flex justify-between items-start mb-3">
            <div className="flex items-center space-x-3">
              <img
                className="w-12 h-12 rounded-full object-cover flex-shrink-0"
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&q=80"
                alt="User Avatar"
              />
              <div className="text-sm min-w-0">
                <a
                  href="#"
                  className="font-semibold text-primary hover:underline hover:text-blue-700 dark:hover:text-blue-400"
                >
                  Michael Chen
                </a>
                <p className="text-xs text-secondary truncate">
                  Lead Software Engineer | Cloud Architecture | DevOps
                </p>
                <p className="text-xs text-secondary flex items-center">
                  1d • Edited •
                  <svg
                    className="w-3 h-3 text-secondary"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M0 8a8 8 0 1 0 16 0A8 8 0 0 0 0 8zm8-6.5a6.5 6.5 0 1 1 0 13 6.5 6.5 0 0 1 0-13zM6 8a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1V8zm5.472.088a1.144 1.144 0 0 0-1.944-.972 1.144 1.144 0 1 0 1.944.972zM4.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                  </svg>
                </p>
              </div>
            </div>
            <button
              aria-label="More options"
              className="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full p-1.5 -mt-1 -mr-1.5"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"></path>
              </svg>
            </button>
          </div>

          <div className="text-sm text-primary mb-3 break-words">
            <p>
              Excited to share some insights from the recent Cloud Native
              Conference! Key takeaways revolved around improved Kubernetes
              security practices and the growing adoption of serverless
              architectures for cost optimization. Highly recommend checking out
              the session recordings if you missed it.{" "}
              <a
                href="#"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                #cloudnative
              </a>{" "}
              <a
                href="#"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                #kubernetes
              </a>{" "}
              <a
                href="#"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                #serverless
              </a>{" "}
              <a
                href="#"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                #devops
              </a>
            </p>
          </div>

          <div className="mb-3 -mx-4 sm:mx-0 sm:rounded-lg overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              alt="Post media content"
              className="w-full object-cover"
            />
          </div>

          <div className="flex items-center justify-between text-xs text-secondary mb-2">
            <div className="flex items-center space-x-1">
              <svg
                className="w-4 h-4 text-blue-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  xmlns="http://www.w3.org/2000/svg"
                  d="M19.2412 4.48567C19.4084 4.45613 19.9017 4.38771 20.2409 4.80362C20.58 5.21954 20.4137 5.68895 20.3511 5.84684C20.2781 6.03091 20.1551 6.24781 20.0394 6.45186L14.2096 16.7397C13.7833 17.492 13.4223 18.1292 13.0837 18.5655C12.7444 19.0026 12.2569 19.4636 11.5438 19.4106C10.8307 19.3576 10.4168 18.8296 10.1458 18.3471C9.87545 17.8656 9.61259 17.1821 9.30222 16.375L8.57848 14.4932C8.50596 14.3047 8.46511 14.1997 8.42906 14.1229C8.41301 14.0887 8.40261 14.0706 8.39685 14.0614C8.39411 14.0571 8.39245 14.0548 8.39182 14.0539L8.39101 14.0529L8.39007 14.052L8.38679 14.0492L8.38312 14.0463C8.37454 14.0397 8.35748 14.0276 8.325 14.0083C8.25203 13.965 8.1515 13.9143 7.97081 13.8239L6.98271 13.3299C6.10066 12.8889 5.36544 12.5213 4.86354 12.1752C4.37714 11.8398 3.83065 11.3379 3.88886 10.5671C3.94707 9.7963 4.56273 9.38216 5.09398 9.12362C5.64217 8.85684 6.42424 8.60385 7.36252 8.30033L18.5857 4.66928C18.8089 4.59697 19.0462 4.52011 19.2412 4.48567Z"
                  fill="#000000"
                />
              </svg>
              <span className="hover:text-blue-600 hover:underline cursor-pointer">
                235
              </span>
            </div>
            <div className="space-x-2">
              <span className="hover:text-blue-600 hover:underline cursor-pointer">
                41 comments
              </span>
              <span>•</span>
              <span className="hover:text-blue-600 hover:underline cursor-pointer">
                18 reposts
              </span>
            </div>
          </div>

          <div className="border-t linkedin-border pt-2 flex justify-around text-sm font-medium text-gray-600 dark:text-gray-300">
            <button
              aria-label="Like"
              className="flex items-center space-x-1.5 hover:bg-gray-100 dark:hover:bg-gray-700 p-2 rounded w-full justify-center transition-colors duration-150"
            >
              {/* <svg
            className="w-5 h-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
          >
            <path
              xmlns="http://www.w3.org/2000/svg"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M19.1959 6.98709C17.5699 4.89134 14.3061 5.24282 13.1635 7.63669C12.6965 8.61527 11.3035 8.61527 10.8365 7.63669C9.69394 5.24282 6.43011 4.89135 4.8041 6.98709L4.49475 7.38581C3.08665 9.2007 3.28996 11.7888 4.96418 13.3616L11.9168 19.8928C11.9479 19.922 11.9753 19.9477 12 19.9708C12.0247 19.9477 12.0521 19.922 12.0832 19.8928L19.0358 13.3616C20.71 11.7888 20.9133 9.2007 19.5052 7.38581L19.1959 6.98709ZM12 6.62866C13.7697 3.5573 18.1553 3.19885 20.381 6.06759L20.6904 6.46631C22.5728 8.89249 22.301 12.3524 20.0628 14.4548L13.0927 21.0026C12.9885 21.1005 12.8747 21.2075 12.7673 21.2902C12.6438 21.3853 12.4712 21.4954 12.2407 21.5406C12.0818 21.5718 11.9182 21.5718 11.7593 21.5406C11.5288 21.4954 11.3562 21.3853 11.2327 21.2902C11.1253 21.2075 11.0115 21.1005 10.9073 21.0026L3.93717 14.4548C1.69903 12.3524 1.42724 8.8925 3.30962 6.46632L3.61898 6.06759C5.84473 3.19885 10.2303 3.55729 12 6.62866Z"
              fill="#000000"
            />
          </svg> */}
              <span>Like</span>
            </button>
            <button
              aria-label="Comment"
              className="flex items-center space-x-1.5 hover:bg-gray-100 dark:hover:bg-gray-700 p-2 rounded w-full justify-center transition-colors duration-150"
            >
              {/* <svg
            className="w-5 h-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 011.037-.443 48.282 48.282 0 005.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
            />
          </svg> */}
              <span>Comment</span>
            </button>
            <button
              aria-label="Repost"
              className="flex items-center space-x-1.5 hover:bg-gray-100 dark:hover:bg-gray-700 p-2 rounded w-full justify-center transition-colors duration-150"
            >
              {/* <svg
            className="w-5 h-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
          >
            <path
              xmlns="http://www.w3.org/2000/svg"
              id="primary"
              d="M6,14V9A6,6,0,0,1,16.89,5.54"
              style="fill: none; stroke: rgb(0, 0, 0); strokeLinecap: round; strokeLinejoin: round; strokeWidth: 2;"
            />
            <path
              xmlns="http://www.w3.org/2000/svg"
              id="primary-2"
              data-name="primary"
              d="M18,10v5A6,6,0,0,1,7.11,18.46"
              style="fill: none; stroke: rgb(0, 0, 0); strokeLinecap: round; strokeLinejoin: round; strokeWidth: 2;"
            />
            <polyline
              xmlns="http://www.w3.org/2000/svg"
              id="primary-3"
              data-name="primary"
              points="8 12 6 14 4 12"
              style="fill: none; stroke: rgb(0, 0, 0); strokeLinecap: round; strokeLinejoin: round; strokeWidth: 2;"
            />
            <polyline
              xmlns="http://www.w3.org/2000/svg"
              id="primary-4"
              data-name="primary"
              points="16 12 18 10 20 12"
              style="fill: none; stroke: rgb(0, 0, 0); strokeLinecap: round; strokeLinejoin: round; strokeWidth: 2;"
            />
          </svg> */}
              <span>Repost</span>
            </button>
            <button
              aria-label="Send"
              className="flex items-center space-x-1.5 hover:bg-gray-100 dark:hover:bg-gray-700 p-2 rounded w-full justify-center transition-colors duration-150"
            >
              {/* <svg
            className="w-5 h-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
            />
          </svg> */}
              <span>Send</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
