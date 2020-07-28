package mvc.dao;

import java.util.List;
import java.util.Map;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import mvc.vo.Bangking_viewVO;

@Repository
public class BangkingDAO {
	@Autowired
	private SqlSessionTemplate ss;
	
	public List<Bangking_viewVO> getaccount(String ac_num){
		return ss.selectList("bangking.getaccount",ac_num);
	}
	
	
	///////////////////////////////////////////////////////////입금시작@
	public int depcheckac(String ac_num) {
	return ss.selectOne("bangking.depcheckac", ac_num);
	}
	public void depplusdep(String dep_money) {
	ss.insert("bangking.depplusdep", dep_money);
	}
	public void depplussp(Map<String, String> paramapsp ) {
	ss.insert("bangking.depplussp", paramapsp );
	}
	public void depdepupbalance(Map<String, String> paramapbal) {
	ss.update("bangking.depdepupbalance", paramapbal);
	}
	///////////////////////////////////////////////////////////입금종료/@
	
	///////////////////////////////////////////////////////////출금시작@
	public int witcheckac(String ac_num) {
	return ss.selectOne("bangking.witcheckac", ac_num);
	}
	
	public String witcheckbal(Map<String, String> paramckbal) {
	return ss.selectOne("bangking.witcheckbalance", paramckbal);
	}
	
	public void witpluswit(String wit_money) {
	ss.insert("bangking.witpluswit", wit_money);
	}
	public void witplussp(Map<String, String> paramapsp ) {
	ss.insert("bangking.witplussp", paramapsp );
	}
	public void witwitupbalance(Map<String, String> paramapbal) {
	ss.update("bangking.witwitupbalance", paramapbal);
	}
	///////////////////////////////////////////////////////////출금종료/@
	
}
