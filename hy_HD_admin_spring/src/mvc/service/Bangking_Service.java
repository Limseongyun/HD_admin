package mvc.service;

import org.springframework.transaction.annotation.Transactional;

import mvc.dao.BangkingDAO;
import mvc.vo.Bangking_viewVO;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@Transactional
public class Bangking_Service {
	@Autowired
	private BangkingDAO bangkingdao;
	
	public void depositprocess(Bangking_viewVO vo) {
		bangkingdao.depplusdep(vo.getMoney());
		bangkingdao.depplussp(vo);
		bangkingdao.depdepupbalance(vo);
	}
	
	public void withdrawprocess(Bangking_viewVO vo) {
		bangkingdao.witpluswit(vo.getMoney());
		bangkingdao.witplussp(vo);
		bangkingdao.witwitupbalance(vo);
	}
}
