import { get } from "mongoose";
import { getAllCategories, updateCategoryById } from "./controllerCategory";
import Category from "./modelCategory";

const CategoryDao = {
    async getAllCategories() {
        try {
            const categories = await Category.find();
            return categories;
        } catch (error) {
            return { error: 'Error al obtener las categorías' };
        }
    },

    async getCategoryById(id: string) {
        try {
            const category = await Category.findById(id);
            if (!category) {
                return { error: 'Categoría no encontrada' };
            }
            return category;
        } catch (error) {
            return { error: 'Error al obtener la categoría' };
        }
    },

    async createCategory(name: string) {
        try {
            const category = new Category({ name });
            await category.save();
            return category;
        } catch (error) {
            return { error: 'Error al crear la categoría' };
        }
    },

    async updateCategoryById( id: string, name: string) {
        try {
            const category= await Category.findByIdAndUpdate( id, { name }, { new: true });
            if (!category) {
                return { error: 'Categoría no encontrada' };
            }
            return category;
        }
        catch (error) {
            return { error: 'Error al actualizar la categoría' };
        }
    },

    async deleteCategoryById(id: string) {
        try {
            const category = await Category.findByIdAndDelete(id);
            if (!category) {
                return { error: 'Categoría no encontrada' };
            }
            return category;
        } catch (error) {
            return { error: 'Error al eliminar la categoría' };
        }
    }

};

export const categoryDao = CategoryDao;
