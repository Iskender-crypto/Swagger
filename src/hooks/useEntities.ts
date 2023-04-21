import axios from "axios";
import { onMounted, Ref, ref } from "vue";
import { Entity } from "../entities/Entity";

export const useEntities = <TEntity extends Entity>(
  url: string,
  limit?: number,
) => {
  const items: Ref<TEntity[]> = ref([]);
  const loaded: Ref<boolean> = ref(false);
  const dialog = ref();
  const item: Ref<TEntity | any> = ref({});

  const get = async (searchText?: string) => {
    let _url = searchText;
    let limitUrl = url;
    if (limit) {
      limitUrl = `${url}?_limit=${limit}`;
    }
    const { data } = await axios.get(limitUrl);
    items.value = data;
  };

  const show = (i: TEntity) => {
    if (i == null) return;
    Object.assign(item.value, i);
    dialog.value.modal.show();
  };

  const add = async () => {
    const { data } = await axios.post(url, item.value);
    items.value.unshift(data);
    dialog.value.modal.hide();
    item.value = {};
  };

  const update = async () => {
    const { data } = await axios.put(`${url}/${item.value.id}`, item.value);
    const index = items.value.findIndex((y: TEntity) => y.id === data.id);
    items.value[index] = data;
    dialog.value.modal.hide();
  };

  const remove = async (id: number) => {
    await axios.delete(`${url}/${id}`);
    const index = items.value.findIndex((i: TEntity) => i.id === id);
    items.value.splice(index, 1);
    dialog.value.modal.hide();
  };

  onMounted(async () => {
    await get();
    loaded.value = true;
  });

  return {
    items,
    loaded,
    dialog,
    show,
    item,
    get,
    add,
    update,
    remove,
  };
};
