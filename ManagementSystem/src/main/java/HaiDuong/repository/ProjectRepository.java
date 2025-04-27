package HaiDuong.repository;

import HaiDuong.Model.Project;
import HaiDuong.Model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface ProjectRepository extends JpaRepository<Project,Long> {

//    List<Project> findByOwner(User user);

    List<Project> findByNameContainingAndTeamContains(String partialName,User user);

//    @Query("select p from Project p join p.team t where t=:user")
//    List<Project> findProjectByByTeam(@Param("user") User user);

    @Query(value = "select p.* from Project p left join project_team pt on p.id = pt.project_id where p.id = :projectId and pt.team_id = :userId",nativeQuery = true)
    Optional<Project> findByUserIdAndProjectId(@Param("projectId") Long projectId, @Param("userId") Long userId);

    List<Project> findByTeamContainingOrOwner(User user,User owner);
}
