package com.filali.book.common;

import lombok.*;

import java.util.List;

@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class PageResponse<T> { //  A custom class to encapsulate paginated data, including the list of books, total pages, total elements, etc
    // is a technique used to break down large datasets into smaller, more manageable chunks or pages. Instead of returning all data at once
    private List<T> content;
    private int number;
    private int size;
    private long totalElements;
    private int totalPages;
    private boolean first; // if is the first page
    private boolean last; // if is the last page
}
