import child_process from "child_process"

interface IGitService {
    GetCommitHash() : string;
}

class GitService implements IGitService {
    public GetCommitHash(){
         const result = child_process.execSync("git rev-parse HEAD").toString().trim();
         return result;
    } 
}
export {IGitService};
export default new GitService();