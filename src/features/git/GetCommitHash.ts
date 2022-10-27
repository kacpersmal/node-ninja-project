import child_process from 'child_process';

const GetCommitHash = () => {
  const result = child_process.execSync('git rev-parse HEAD').toString().trim();
  return result;
};

export default GetCommitHash;
