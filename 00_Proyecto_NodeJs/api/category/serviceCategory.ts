import { Category } from './typesCategory';
import { categoryDao } from './daoCategory';

const { getAllCategories, getCategoryById, createCategory, updateCategoryById, deleteCategoryById } = categoryDao;

class ServiceCategory {
    async getAllCategories() {
        return await getAllCategories();
    }

    async getCategoryById(id: string) {
        return await getCategoryById(id);
    }

    async createCategory(name: string) {
        return await createCategory(name);
    }

    async updateCategoryById(id: string, name: string) {
        return await updateCategoryById(id, name);
    }

    async deleteCategoryById(id: string) {
        return await deleteCategoryById(id);
    }
}

export default ServiceCategory;