package ru.insoft.archive.qqweb.service;

import javax.inject.Inject;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.MediaType;
import ru.insoft.archive.qqejb.dao.JvkDao;
import ru.insoft.archive.qqejb.dto.PageDto;
import ru.insoft.archive.qqejb.dto.SicJvkDto;

/**
 * Точка доступа для ЖВК.
 *
 * @author stikkas<stikkas@yandex.ru>
 */
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
@Path("jvk")
public class JvkService {

	@Inject
	JvkDao jd;

	@GET
	@Path("sic")
	public PageDto<SicJvkDto> getSicJvk(@QueryParam("start") int start,
			@QueryParam("limit") int limit) {
		return jd.getSicJvk(start, limit);
	}
}
