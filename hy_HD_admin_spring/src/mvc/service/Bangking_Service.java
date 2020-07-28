package mvc.service;

import org.springframework.transaction.annotation.Transactional;

import mvc.dao.BangkingDAO;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@Transactional
public class Bangking_Service {
	@Autowired
	private BangkingDAO bangkingdao;
	public void depositprocess(String money,Map<String, String> paramapsp,Map<String, String> paramapbal) {
		bangkingdao.depplusdep(money);
		bangkingdao.depplussp(paramapsp);
		bangkingdao.depdepupbalance(paramapbal);
	}
}
