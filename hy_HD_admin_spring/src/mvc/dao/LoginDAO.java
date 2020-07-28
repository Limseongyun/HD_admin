package mvc.dao;

import java.util.List;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import mvc.vo.EmployeeVO;

@Repository
public class LoginDAO {
	@Autowired
	private SqlSessionTemplate ss;
	
	public String logincheck(EmployeeVO vo) {
		return ss.selectOne("login.logincheck",vo);
	}
	
	public List<EmployeeVO> logininfo(EmployeeVO vo){
		return ss.selectList("login.logininfo",vo);
	}
}
