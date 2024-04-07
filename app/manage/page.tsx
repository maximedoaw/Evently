import DotsMobileStepper from "@/components/shared/PaginationControlled";
import BasicTable from "../../components/shared/Table";
import { get_event } from "../helper/action";

async function page(){
    return (
        <div>
            <BasicTable/>
            <DotsMobileStepper />
        </div>
    )
}

export default page;