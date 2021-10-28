import React from "react";
import Breadcrum from "../Breadcrum";
import Sidebar from "../Sidebar";
import { ImFacebook, ImLink, ImTwitter } from "react-icons/im";

const Single = () => {
  return (
    <div className="w-full mt-16 bg-white mb-96 dark:bg-gray-900">
      <div className="container-post">
        <Breadcrum />
        <h1 className="text-5xl text-gray-900 dark:text-white font-semibold">
          The Journey Towards Finding the Perfect Ice Cream
        </h1>
      </div>
      <div className="container">
        <div className="border-t mt-8 pt-8 border-solid border-gray-200 dark:border-gray-600 flex flex-col md:flex-row">
          <div className="w-full md:w-1/12 mx-2">
            <div className="mt-4">
              <div className="mb-4 flex flex-row md:flex-col ">
                <div className="w-12 mr-4 md:mr-0 cursor-pointer h-12 mb-6 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-400">
                  <ImFacebook />
                </div>
                <div className="w-12 mr-4 md:mr-0 cursor-pointer h-12 mb-6 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-400">
                  <ImTwitter />
                </div>
                <div className="w-12 mr-4 md:mr-0 cursor-pointer h-12 mb-6 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-400">
                  <ImLink />
                </div>
              </div>
            </div>
          </div>

          <div className="w-full md:w-9/12 mx-2">
            <div className="flex items-center pt-3 ">
              <span className="text-xs font-medium text-black dark:text-white uppercase mr-4 ">
                FEBURARY 14 2021
              </span>
              <div className="flex items-center justify-between">
                <span className="font-normal text-xxs dark:text-white mr-2">By. </span>
                <span className="text-xxs font-semibold text-gray-900 dark:text-white whitespace-nowrap ">
                  John Doe
                </span>
              </div>
            </div>

            <div className="mt-6 text-gray-800 leading-8 dark:text-white">
              <div style={{ height: 400 }}>
                <img
                  className="object-top object-cover w-full h-full"
                  src="https://images.unsplash.com/photo-1523281865257-87b910862edf?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80"
                  alt="orange"
                />
              </div>
              <h2 className="mt-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum.
              </h2>{" "}
              <br /> <br />
              <h2>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
                veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam
                voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur
                magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
                qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non
                numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat
                voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis
                suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum
                iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur,
                vel illum qui dolorem eum fugiat quo voluptas nulla pariatur
              </h2>
              <br />
              <br />
              <div style={{ height: 400 }}>
                <img
                  className="object-top object-cover w-full h-full"
                  src="https://images.unsplash.com/photo-1586952518485-11b180e92764?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=905&q=80"
                  alt="orange"
                />
              </div>
              <br />
              <br />
              <br />
              <br />
              <h2>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
                veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam
                voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur
                magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
                qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non
                numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat
                voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis
                suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum
                iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur,
                vel illum qui dolorem eum fugiat quo voluptas nulla pariatur
              </h2>
            </div>
          </div>

          <div className="w-full md:w-4/12 mx-2">
            <Sidebar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Single;
