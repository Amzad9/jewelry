import { LoaderCircle } from "lucide-react"

function Loader({ loader }: { loader: boolean }) {
    return (
        <>
            {loader && <div className="flex justify-center items-center h-screen bg-opacity-30">
                <LoaderCircle className="animate-spin text-blue-500 w-12 h-12" />
            </div>}
        </>

    )
}

export default Loader