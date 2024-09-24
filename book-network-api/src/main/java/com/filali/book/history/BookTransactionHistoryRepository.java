package com.filali.book.history;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.Optional;

public interface BookTransactionHistoryRepository extends JpaRepository<BookTransactionHistory, Integer> {
    @Query(nativeQuery = true,
            value = "SELECT history FROM BookTransactionHistory history WHERE history.book.owner_id = :userId")
    Page<BookTransactionHistory> findAllBorrowedBooks(Pageable pageable, @Param("userId") Integer userId);

    @Query(nativeQuery = true,
            value = "SELECT history FROM BookTransactionHistory history WHERE history.book.createdBy = :userId"
    )
    Page<BookTransactionHistory> findAllReturnedBooks(Pageable pageable, @Param("userId") String userId);

    @Query(nativeQuery = true,
            value = "SELECT (COUNT(*) > 0) AS isBorrowed FROM BookTransactionHistory bookTransactionHistory" +
                    " WHERE bookTransactionHistory.user_id = :userId " +
                    "AND bookTransactionHistory.book_id = :bookId " +
                    "AND bookTransactionHistory.return_approved = false"
    )
    boolean isAlreadyBorrowedByUser(@Param("bookId") Integer bookId, @Param("userId") Integer userId);

    @Query(nativeQuery = true,
            value = "SELECT transaction FROM BookTransactionHistory transaction WHERE transaction.user_id = :userId AND transaction.book_id = :bookId AND transaction.returned = false AND transaction.return_approved = false"
    )
    Optional<BookTransactionHistory> findByBookIdAndUserId(@Param("bookId") Integer bookId, @Param("userId") Integer userId);

    @Query(nativeQuery = true,
            value = "SELECT transaction FROM BookTransactionHistory transaction WHERE transaction.book.owner_id = :userId AND transaction.book_id = :bookId AND transaction.returned = true AND transaction.return_approved = false")
    Optional<BookTransactionHistory> findByBookIdAndOwnerId(@Param("bookId") Integer bookId, @Param("userId") Integer userId);
}
