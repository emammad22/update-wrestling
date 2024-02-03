import { instance } from ".";

const getData = async (path: string) => (await instance.get(path)).data;
const postData = async (path: string, { arg }: { arg: unknown }) => (await instance.post(path, arg)).data;
const updateData = async (path: string, { arg }: { arg: unknown }) => (await instance.put(path, arg)).data;
const deleteData = async (path: string) => (await instance.delete(path)).data;

export { getData, postData, updateData, deleteData };
