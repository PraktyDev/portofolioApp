import { TiTick } from "react-icons/ti";

const Success = () => {

  return (
    <div className="flex mx-auto container justify-center items-center">
        <div className="bg-gray-200 py-1 px-4 rounded-md w-full">
            <div className="flex justify-center gap-4 items-center">
                <TiTick className="p-1 w-6 laptop:w-10 h-6 laptop:h-10 rounded-lg bg-green-400" />
                <h2 className="text-md laptop:text-xl font-semibold">Message Sent</h2>
            </div>
        </div>
    </div>
  );
};

export default Success;
