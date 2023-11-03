import { Injectable } from "@nestjs/common";
import { CreatePostDto } from "./dto/create-post.dto";
import { UpdatePostDto } from "./dto/update-post.dto";
const { Post } = require("../../database/models");

@Injectable()
export class PostsService {
    create(createPostDto: CreatePostDto) {
        return "This action adds a new post";
    }

    async findAll() {
        try {
            const allPosts = await Post.findAll({
                order: [["createdAt", "DESC"]]
            });
            return allPosts;
        } catch (error) {
            console.log(error);
            throw new Error("Failed to fetch posts");
        }
    }

    findOne(id: number) {
        return `This action returns a #${id} post`;
    }

    update(id: number, updatePostDto: UpdatePostDto) {
        return `This action updates a #${id} post`;
    }

    remove(id: number) {
        return `This action removes a #${id} post`;
    }
}
