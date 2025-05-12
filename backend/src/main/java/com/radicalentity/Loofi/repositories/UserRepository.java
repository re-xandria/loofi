package com.radicalentity.Loofi.repositories;

import com.radicalentity.Loofi.models.Admin;
import com.radicalentity.Loofi.models.Role;
import com.radicalentity.Loofi.models.User;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByEmail(String email);

    @Query(value = """ 
    select * from users
    where id in (
            select friend_id from users_friends where user_id = :user_id
            union
            select user_id from users_friends where friend_id = :user_id
        )
    """, nativeQuery = true)
    List<User> findAllFriends(@Param("user_id") Long id);

    @Transactional
    @Modifying
    @Query(value= """
        delete from users_friends where (user_id = :user_id and friend_id = :friend_id) or (user_id = :friend_id and friend_id = :user_id)
    """, nativeQuery = true)
    void removeFriend(@Param("user_id") Long userId, @Param("friend_id") Long friendId);

    List<User> findByRole(Role role);

}
