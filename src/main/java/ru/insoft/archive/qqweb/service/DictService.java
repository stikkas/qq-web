package ru.insoft.archive.qqweb.service;

import java.util.List;
import javax.inject.Inject;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import ru.insoft.archive.qqejb.dao.DescriptorValueDao;
import ru.insoft.archive.qqejb.dto.DictDto;
import ru.insoft.archive.qqejb.dto.DictSVDto;

/**
 * Точка доступа для справочников.
 * @author stikkas<stikkas@yandex.ru>
 */
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
@Path("dict")
public class DictService {
	@Inject
	DescriptorValueDao dvd;

	/**
	 * Возвращает список состояний запроса
	 * @return справочник
	 */
	@GET
	@Path("statuses")
	List<DictDto> getQuestionStatuses() {
		return dvd.getFullValues("Q_DICT_QUESTION_STATUSES");
	}
	@GET
	@Path("organizations")
	List<DictSVDto> getOrganizations() {
		return dvd.getFullShortValues("ORG_STRUCTURE");
	}
}
