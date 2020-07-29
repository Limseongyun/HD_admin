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
	public void depplussp(Bangking_viewVO vo ) {
	ss.insert("bangking.depplussp", vo );
	}
	public void depdepupbalance(Bangking_viewVO vo) {
	ss.update("bangking.depdepupbalance", vo);
	}
	///////////////////////////////////////////////////////////입금종료/@
	
	///////////////////////////////////////////////////////////출금시작@
	public int witcheckac(String ac_num) {
	return ss.selectOne("bangking.witcheckac", ac_num);
	}
	
	public String witcheckbal(Bangking_viewVO vo) {
	return ss.selectOne("bangking.witcheckbalance", vo);
	}
	
	public void witpluswit(String wit_money) {
	ss.insert("bangking.witpluswit", wit_money);
	}
	public void witplussp(Bangking_viewVO vo) {
	ss.insert("bangking.witplussp", vo );
	}
	public void witwitupbalance(Bangking_viewVO vo) {
	ss.update("bangking.witwitupbalance", vo);
	}
	///////////////////////////////////////////////////////////출금종료/@
	
}
