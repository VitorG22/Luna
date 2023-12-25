import { useContext } from "react";
import { chalenderInfoContext } from "../contexts/contexts";

export default function useChalenderInfoContext(){
    const context = useContext(chalenderInfoContext)

    if(context === undefined){
        throw new Error("Não esta inserido no contexto")
    }

    return context
}


