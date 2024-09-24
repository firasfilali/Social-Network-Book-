package com.filali.book.feedback;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface FeedBackRepository extends JpaRepository<Feedback, Integer> {
    @Query(nativeQuery = true,
            value = "SELECT feedback FROM Feedback feedback WHERE feedback.book_id = :bookId"
    )
    Page<Feedback> findAllByBookId(@Param("bookId") Integer bookId, Pageable pageable);
}
