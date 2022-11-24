import { api } from "./src/mod.ts";

const find = async (name:string) => { 

    if(name.length!=0){
        let query = await api.search(`${name}`);
        let result:any = [];
        for(let crate of query.crates){
            let crateTemplate = {
                type:'article',
                id: crate['id'],
                title:crate['name'],
                description: crate['description'],
                input_message_content:{
                    message_text: `<b>Package name</b>: ${crate['name']} \n<b>Version</b>: ${crate['newest_version']} \n<b>Link</b>: ${crate['documentation']}`,
                    parse_mode:'HTML',
                    disable_web_page_preview:true,	
                },
                url: crate['documentation'],
            }

            result.push(crateTemplate);
        }

        return result;
    }else{
        throw new Error("Package name should not be empty!")
    }
}

export default find;