package com.filali.book.book;

import org.springframework.data.jpa.domain.Specification;

public class BookSpecification { //This class is likely used for creating dynamic queries to filter Book entities based on specific criteria
    public static Specification<Book> withOwnerId(Integer ownerId) { // root = Book
        return (root, query, criteriaBuilder) -> criteriaBuilder.equal(root.get("owner").get("id"), ownerId);
    }
}
