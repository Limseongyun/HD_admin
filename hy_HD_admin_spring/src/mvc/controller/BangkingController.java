package mvc.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import com.nexacro17.xapi.data.DataSet;
import com.nexacro17.xapi.data.DataTypes;


import mvc.dao.BangkingDAO;
import mvc.service.Bangking_Service;
import mvc.vo.Bangking_viewVO;

@Controller
public class BangkingController {

	@Autowired
	private BangkingDAO bangkingdao;
	
	@Autowired
	private Bangking_Service bangkingservice;
	@RequestMapping("/getaccount")
	public ModelAndView getac(String ac_num) {
		ModelAndView mav = new ModelAndView("all");
		List<Bangking_viewVO> ac = bangkingdao.getaccount(ac_num);
		DataSet ds = new DataSet("ar");
		ds.addColumn("�����ڵ�", DataTypes.INT, 30);
		ds.addColumn("���³���",DataTypes.STRING,100);
		ds.addColumn("���¹�ȣ",DataTypes.STRING,100);
		ds.addColumn("������",DataTypes.STRING,100);
		ds.addColumn("�ܾ�",DataTypes.STRING,100);
		ds.addColumn("�����ֹ�ȣ",DataTypes.STRING,100);
		ds.addColumn("����������",DataTypes.STRING,100);
		ds.addColumn("�����ּ���",DataTypes.STRING,100);
		ds.addColumn("���»�����",DataTypes.STRING,100);
		ds.addColumn("����������",DataTypes.STRING,100);
		ds.addColumn("����ڵ�",DataTypes.INT,30);
		
		for (Bangking_viewVO e : ac) {
			int row = ds.newRow();
			ds.set(row, "�����ڵ�", e.getAc_code());
			ds.set(row, "���³���", e.getAc_name());
			ds.set(row, "���¹�ȣ", e.getAc_num());
			ds.set(row, "������", e.getMem_name());
			ds.set(row, "�ܾ�", e.getAc_balance());
			ds.set(row, "�����ֹ�ȣ", e.getMem_phn());
			ds.set(row, "����������", e.getMem_job());
			ds.set(row, "�����ּ���", e.getMem_gender());
			ds.set(row, "���»�����", e.getAc_start_date());
			ds.set(row, "����������", e.getAc_end_date());
			ds.set(row,"����ڵ�",e.getMem_code());
		}
		
		mav.addObject("ds", ds);
		return mav;
	}
	
	@RequestMapping(value={ "/deposit" })
	public ModelAndView executedeposit(Bangking_viewVO vo) {
		ModelAndView mav = new ModelAndView();
		if(bangkingdao.depcheckac(vo.getAc_num())>=1) {
			bangkingservice.depositprocess(vo);
		}
		mav.setViewName("redirect:/");
		return mav;
	}
	
	//����ϱ�(�ӽñ��)
	@RequestMapping(value={ "/withdraw" })
	public ModelAndView executewithdraw(Bangking_viewVO vo) {	
		ModelAndView mav = new ModelAndView();
		if(bangkingdao.witcheckac(vo.getAc_num())>=1) {
			if(Long.parseLong(bangkingdao.witcheckbal(vo)) >= Long.parseLong(vo.getMoney())) {
				bangkingservice.withdrawprocess(vo);
			}
		}
		mav.setViewName("redirect:/");
		return mav;
	}
	
}
